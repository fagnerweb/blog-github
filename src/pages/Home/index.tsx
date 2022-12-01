import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { ArticlePost } from './components/Articles'

import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { FaBuilding, FaUserFriends } from 'react-icons/fa'

import { api } from '../../lib/axios'

import {
  Articles,
  BoxHeader,
  BoxSocial,
  Container,
  FormContainer,
  HeaderTitle,
} from './styles'

interface GitUserProps {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  company: string
  followers: string
}

interface IssuesProps {
  id: number
  title: string
  body: string
  number: number
  created_at: Date
}

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const [gitUser, setGitUser] = useState({} as GitUserProps)
  const [issues, setIssues] = useState<IssuesProps[]>([])

  useEffect(() => {
    async function getData() {
      const response = await api.get('/users/fagnerweb')

      const newData = {
        login: response.data.login,
        avatar_url: response.data.avatar_url,
        html_url: response.data.html_url,
        name: response.data.name,
        bio: response.data.bio,
        company: response.data.company,
        followers: response.data.followers,
      }
      setGitUser(newData)

      const issuesData = await api.get('/repos/fagnerweb/blog-github/issues')
      setIssues(issuesData.data)
    }

    getData()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchGitIssues(data: SearchFormInputs) {
    const response = await api.get(
      `/search/issues?q=${data.search}%20repo:fagnerweb/blog-github`,
    )
    setIssues(response.data.items)
  }

  return (
    <Container>
      <BoxHeader>
        <img src={gitUser.avatar_url} alt="" />
        <div className="info">
          <HeaderTitle>
            <h1>{gitUser.name}</h1>
            <a target="_blank" href={gitUser.html_url} rel="noreferrer">
              GitHub <BsBoxArrowUpRight fontSize={12} strokeWidth={1} />
            </a>
          </HeaderTitle>
          <p>{gitUser.bio}</p>

          <BoxSocial>
            <li>
              <BsGithub fontSize={18} />
              {gitUser.login}
            </li>
            <li>
              <FaBuilding fontSize={18} />
              {gitUser.company}
            </li>
            <li>
              <FaUserFriends fontSize={18} />
              {gitUser.followers} seguidores
            </li>
          </BoxSocial>
        </div>
      </BoxHeader>
      <FormContainer onSubmit={handleSubmit(handleSearchGitIssues)}>
        <div className="h-title ">
          <h2>Publicações</h2>
          <span>
            {issues.length === 0 && 'Ainda não existem publicações'}
            {issues.length === 1 && '1 publicação'}
            {issues.length > 1 && `${issues.length} publicações`}
          </span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
          disabled={isSubmitting}
        />
      </FormContainer>
      <Articles>
        {issues.map((article) => {
          return (
            <ArticlePost
              key={article.id}
              title={article.title}
              slug={article.number}
              description={article.body}
              postAt={article.created_at}
            />
          )
        })}
      </Articles>
    </Container>
  )
}

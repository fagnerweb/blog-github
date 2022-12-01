import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { BsGithub } from 'react-icons/bs'
import { FaBuilding, FaUserFriends } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import {
  BoxArticle,
  BoxHeader,
  BoxSocial,
  Container,
  NavTop,
  Title,
} from './style'
import { api } from '../../lib/axios'

interface ArticleProps {
  title: string
  body: string
  html_url: string
  comments: number
  created_at: Date
}

export function Post() {
  const [article, setArticle] = useState({} as ArticleProps)
  const { slug } = useParams()

  useEffect(() => {
    async function getDataIssue() {
      const response = await api.get(
        `/repos/fagnerweb/blog-github/issues/${slug}`,
      )
      setArticle(response.data)
    }
    getDataIssue()
  }, [slug])

  return (
    <Container>
      <BoxHeader>
        <NavTop>
          <NavLink to="/">
            <IoIosArrowBack fontWeight="bold" size={18} />
            voltar
          </NavLink>
          <a target="_blanck" href={article.html_url}>
            ver no github
          </a>
        </NavTop>
        <header>
          <Title>{article.title}</Title>
        </header>

        <BoxSocial>
          <li>
            <BsGithub fontSize={18} />
            fagnerweb
          </li>
          <li>
            <FaBuilding fontSize={18} />
            {formatDistanceToNow(
              new Date(article.created_at ? article.created_at : new Date()),
              {
                addSuffix: true,
                locale: ptBR,
              },
            )}
          </li>
          <li>
            <FaUserFriends fontSize={18} />
            {article.comments} comentário{article.comments > 1 && 's'}
          </li>
        </BoxSocial>
      </BoxHeader>
      <BoxArticle>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.body}
        </ReactMarkdown>
      </BoxArticle>
    </Container>
  )
}

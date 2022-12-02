import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from './styles'

interface ArticlePostProps {
  title: string
  slug: number
  description: string
  postAt: Date
}

export function ArticlePost({
  title,
  slug,
  description,
  postAt,
}: ArticlePostProps) {
  const descriptionMark =
    description.length > 200
      ? description.substring(0, 200) + '...'
      : description

  return (
    <Container>
      <NavLink to={`posts/${slug}`}>
        <div className="title-group">
          <h3>{title.length > 18 ? title.substring(0, 18) + '...' : title}</h3>
          <span>
            {formatDistanceToNow(new Date(postAt), {
              // addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <p>{descriptionMark}</p>
      </NavLink>
    </Container>
  )
}

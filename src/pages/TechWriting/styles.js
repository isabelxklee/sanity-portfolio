import styled from 'styled-components'
import {Box} from '../../styles'

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const PostContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 900px) {
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`

import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { getPost } from '~/post'

export const loader: LoaderFunction = async (args) => {
  invariant(args.params.slug, 'expected params.slug')
  return getPost(args.params.slug)
}

const PostSlug = () => {
  const post = useLoaderData()
  return <div dangerouslySetInnerHTML={{ __html: post.html }} />
}

export default PostSlug

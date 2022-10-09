import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import BlockContent from 'components/BlogContent';



const BlogDetail = ({blog}) => {
    return (
        <PageLayout className="blog-detail-page">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
                title={blog.title}
                subtitle={blog.subtitle}
                coverImage={blog.coverImage}
                author={blog.author}
                date={blog.date}
            />
            <hr/>
            <BlockContent content={blog.content}/>
            </Col>
          </Row>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const blog = await getBlogBySlug(params.slug);

    return {
        props: {blog},
    }
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs();

    return {
        paths: blogs?.map(blog => ({ params: { slug: blog.slug }})),
        fallback: false,
    }
}

export default BlogDetail;
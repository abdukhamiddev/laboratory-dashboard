import Layout from '../../components/Layout';
import { useMyBlog } from '../../hooks/useBlog';
import Loading from '../../components/Loading';
import BlogCard from '../../components/Blog/Card';

export default function Myblog() {
    const { data: myBlogData, isLoading } = useMyBlog();

    if (isLoading) return <Loading />;

    return (
        <Layout>
            <h2 className='mb-4 ml-4 text-blue-500 md:hidden'>My Blog</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                {myBlogData?.map((data, idx) => (
                    <BlogCard key={idx} blogData={data} />
                ))}
            </div>
        </Layout>
    );
}

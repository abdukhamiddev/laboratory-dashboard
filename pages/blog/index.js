import Layout from '../../components/Layout';
import { useAllBlog } from '../../hooks/useBlog';
import BlogCard from '../../components/Blog/Card';
import Loading from '../../components/Loading';

export default function Index() {
    const { data: allBlogData, isLoading } = useAllBlog();


    return (
        <Layout>
            <h2 className='mb-4 ml-4 text-blue-500 md:hidden'>Latest Blog</h2>
            <div className='gap-8 md:columns-2'>
                {allBlogData?.map((data, idx) => (
                    <BlogCard key={data.id} blogData={data} />
                ))}
            </div>
        </Layout>
    );
}

import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import SiteMeta from "../Components/Shared/SiteMeta";
import { useAuth } from "../Hooks/useAuth";

const Blog = () => {
    const { user } = useAuth();
    const blogs = [
        {
            thumbnail: 'https://i.ibb.co/mzngzHQ/react-one-way-data-binding-transformed.webp',
            title: 'What is One way data binding?',
            author: user?.displayName,
            authorAvatar: user?.photoURL,
            description: 'In React, one-way data binding refers to the flow of data from the parent component to its child components. Once the data is passed down to a child component, the child component cannot directly modify the data in the parent component. Instead, any changes to the data in the child component are typically handled by callbacks or events that are passed down as props from the parent component.'
        },
        {
            thumbnail: 'https://i.ibb.co/KDmdJFC/npm-in-node.webp',
            title: 'What is NPM in node.js?',
            author: user?.displayName,
            authorAvatar: user?.photoURL,
            description: 'NPM (Node Package Manager) is a package manager for Node.js. It is used to install, manage, and share packages (libraries or modules) of JavaScript code written for Node.js. NPM comes bundled with Node.js installation and provides access to a vast ecosystem of open-source libraries, making it easy for developers to integrate existing solutions into their Node.js applications.'
        },
        {
            thumbnail: 'https://i.ibb.co/Bj1pKb9/Mongo-Db-vs-My-SQL.webp',
            title: 'Difference between MongoDB database vs mySQL database.',
            author: user?.displayName,
            authorAvatar: user?.photoURL,
            description: <p>
                <strong>MongoDB: </strong>

                MongoDB is a NoSQL database that uses a flexible, JSON-like format known as BSON for data storage. It is designed for scalability and handling unstructured data, making it suitable for scenarios requiring rapid data ingestion and processing, such as real-time analytics and mobile apps. MongoDB's flexible schema allows for easy evolution of data structures over time, making it well-suited for agile development.<br></br><br></br>

                <strong>MySQL: </strong>On the other hand, MySQL is a traditional relational database management system (RDBMS) that uses SQL for data manipulation. It is known for its reliability, ACID compliance, and strong support for transactions, making it ideal for applications where data integrity and consistency are crucial, such as e-commerce systems and financial applications. Unlike MongoDB, MySQL uses a rigid schema where the structure of the data must be defined upfront. Each approach has its strengths, and the choice between MongoDB and MySQL often depends on the specific requirements and nature of the application.
            </p>
        },
    ]
    return (
        <>
            <SiteMeta tagLine="Blog"></SiteMeta>
            <HeroInnerPages pageTitle='Blog' className='h-[300px]'></HeroInnerPages>
            <>
                {/* Card Blog */}
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:items-start gap-6 grid-auto-rows-auto auto-cols-[300px] py-20">
                        {blogs.map(blog => {
                            return <>
                                {/* Card */}
                                <div
                                    className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    <div className="aspect-w-16 aspect-h-11">
                                        <img
                                            className="w-full h-[280px] rounded-xl"
                                            src={blog?.thumbnail}
                                            alt="Image Description"
                                        />
                                    </div>
                                    <div className="my-6">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                                            {blog?.title}
                                        </h3>
                                        <p className="mt-5 text-gray-600 dark:text-gray-400">
                                            {blog?.description}
                                        </p>
                                    </div>
                                    {/* <div className="mt-auto flex items-center gap-x-3">
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src={blog?.authorAvatar}
                                            alt="Image Description"
                                        />
                                        <div>
                                            <h5 className="text-sm text-gray-800 dark:text-gray-200 capitalize">
                                                {blog?.author}
                                            </h5>
                                        </div>
                                    </div> */}
                                </div>
                                {/* End Card */}
                            </>

                        })}
                    </div>
                </div>
            </>

        </>

    );
};

export default Blog;
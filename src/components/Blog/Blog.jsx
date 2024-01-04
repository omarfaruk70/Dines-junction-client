import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
       <Helmet>
       <title>Dines-Junction | Blog </title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold mb-10">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center items-center flex-col px-2 gap-5">
        <div className="collapse collapse-plus bg-base-200 ">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is One way data binding in react js ?
          </div>
          <div className="collapse-content">
            <p>
              One-way data binding means that the data flows in one direction:
              from the state (or model) to the UI. Changes in the state trigger
              updates in the UI, but changes in the UI do not directly affect
              the state. React primarily uses one-way data binding.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is npm in node js ?
          </div>
          <div className="collapse-content">
            <p>
              npm is a package manager for Node.js projects made available for
              public use. Projects available on the npm registry are called
              “packages.” npm allows us to use code written by others easily
              without the need to write them ourselves during development.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Difference between Mongodb database and MySQL database ?
          </div>
          <div className="collapse-content">
            <p>
              MySQL is a relational database system that stores data in a
              structured tabular format. In contrast, MongoDB stores data as
              JSON documents in a more flexible format. Both offer performance
              and scalability, but they give better performance for different
              use cases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

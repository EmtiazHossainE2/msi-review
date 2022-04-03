import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className="row container p-5">
                <div className="col-lg-6 col-md-12">
                    <h3>What is context API ? </h3>
                    <p>The React Context allows us to provide data through components. With it, we don't need to pass them down manually through every level of components. We can also update the data from any child component. Doing so affects all the other places that use the same context.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="ps-4">
                        <h3>What is semantic tag ? </h3>
                        <p>Semantic HTML5 is one of those seemingly small details that hits right at the core of indexing that is often underestimated. Accurately implemented semantic HTML5 gives a big helping hand to the indexing algorithms used by Googlebot and Bingbot.Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Elements such as header , footer  and article  are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. </p>
                        <h5>List of semantic elements</h5>
                        <ul>
                            <li> &lt; header &gt; </li>
                            <li> &lt; main &gt; </li>
                            <li> &lt; nav &gt; </li>
                            <li> &lt; section &gt; </li>
                            <li> &lt; article &gt; </li>
                            <li> &lt; footer &gt; </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
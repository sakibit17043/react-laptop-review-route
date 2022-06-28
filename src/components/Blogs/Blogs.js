import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>1.What is context api?</h1>
            <h2>Ans:-
                Context api is react structure that helps to share data without props drilling.We know that in react application with a lot of nested cmponents to pass a data to child component from nth level it is very difficult.But by context api we can share information to all the nested componets from declare only in parent componets.And we can use it from any components without props drilling.
            </h2>
            <h1>What is semantic tag?</h1>
            <h2>Ans:-The semantic tag is the purpose of understanding the meaning of tag.Semantic tag clearly defines its content.It is easier to read.It has a great accessibility.We use semantic tag for better experience for developer.</h2>
        </div>
    );
};

export default Blogs;
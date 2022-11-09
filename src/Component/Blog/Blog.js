import React, { useEffect } from 'react';
import './Blog.css'

const Blog = () => {
    useEffect(()=>{
        document.title="blog"
    })
    return (
        <div className='blog  lg:grid lg:grid-cols-3 gap-6 p-10'>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mb-6">
                <figure><img src="https://www.agiratech.com/wp-content/uploads/2018/01/Difference-between-SQL-and-NOSQL-2.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL?</h2>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src='https://i.ytimg.com/vi/K6pwjJ5h0Gg/maxresdefault.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work??</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src='https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS??</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. </p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;
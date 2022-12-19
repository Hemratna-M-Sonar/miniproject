import React, {useState} from 'react';
import faqs from '../staticApis/faqs';
import QnA from './QnA';

const Faq = () => {
    const [data, setData] = useState(faqs);
  return (
    <>        
        <div className="bg-white py-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h1 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                    Frequently-asked questions
                </h1>
                <dl className="w-full md:w-2/3">
                    {
                        data.map((ele) => {
                            const {id, que, ans} = ele;
                            return (
                                <QnA 
                                    key = {id}
                                    que = {que}
                                    ans = {ans}
                                />
                            )
                        })
                    }
                </dl>
            </div>
        </div>
    </>
  )
}

export default Faq
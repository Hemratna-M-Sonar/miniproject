import React from 'react'

const QnA = (props) => {
  return (
    <>
        <dt className="mb-4">
            <h3 className="text-xl font-semibold">
                {props.que}
            </h3>
        </dt>
        <dd className="mb-16">
            <p>
                {props.ans}
            </p>
        </dd>
    </>
  )
}

export default QnA
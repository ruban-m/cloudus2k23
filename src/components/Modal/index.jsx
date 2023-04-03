import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

const Modal = ({ link, id, rules, title }) => {
  const [isLink, setIsLink] = useState(false)
  useEffect(() => {
    setIsLink(link !== undefined)
  }, [])

  return (
    <div className='modal fade' id={id}>
      <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4>{`Rules for ${title}`}</h4>
            <button
              className='btn-close'
              data-bs-dismiss='modal'
              data-bs-targ='#modal'
            ></button>
          </div>
          <div className='modal-body'>
            <ol>
              {rules.map((data) => (
                <li key={uuid()}>{data}</li>
              ))}
            </ol>
          </div>
          {isLink ? (
            <div className='modal-footer'>
              <a href={link} download className='btn btn-dark w-100'>
                Download PPT Template
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal

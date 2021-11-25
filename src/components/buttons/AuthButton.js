import React from 'react'

const AuthButton = ({background, title, disabled}) => {




    return (
        <>
          <button 
          style={{
              background:background,
              height: '50px',
              width: '360px', 
              borderRadius:'5px',
              boxShadow:' rgb(255 133 0 / 20%) 0px 2px 4px 0px',
              color:'rgb(255, 255, 255)',
              border:'none',
              transition: 'background 200ms ease 0s',
          }}
          disabled={disabled}
          >
            {title}
        </button>  
        </>
    )
}


export default AuthButton



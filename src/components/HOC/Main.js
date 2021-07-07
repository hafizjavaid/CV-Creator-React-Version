import React from 'react'

const Main = ({children}) => {
    return (
       <main className="l-main bd-container">
            <div className="resume" id="area-cv">
                {children}
            </div>
       </main>

    )
}

export default Main

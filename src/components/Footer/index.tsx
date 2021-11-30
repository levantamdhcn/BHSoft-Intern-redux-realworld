import { GithubFilled } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'
import React from 'react'

const AppFooter = () => {
    return (
        <Footer className='footer'>
            <a href="https://github.com/gothinkster/react-redux-realworld-example-app">
                <GithubFilled />
                <p>Fork on GitHub</p>
            </a>
        </Footer>
    )
}

export default AppFooter

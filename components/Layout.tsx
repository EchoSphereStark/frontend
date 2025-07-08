import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'


type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex ">
        <Sidebar />
        <section className="">
          <TopBar/>
          {children}
        </section>
      </div>
   
    </div>
  )
}

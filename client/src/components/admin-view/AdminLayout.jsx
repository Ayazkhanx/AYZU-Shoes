import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './Sidebar'
import AdminHeader from './Header'

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
        {/* sidebar */}
        <AdminSidebar />
      <div className="flex flex-1 flex-col">
        {/* Header component */}
        <AdminHeader />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
            <Outlet />
        </main>
      </div>
    </div>
  )
}

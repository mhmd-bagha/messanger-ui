const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-between items-center">{children}</div>
    )
}

export default Layout
export default function LayoutWithSidebar({ children }) {
    return (
      <>
        <header>Website</header>
        <main>{children}</main>
        <aside>Sidebar</aside>
        <footer>&copy; Website</footer>
      </>
    );
  }
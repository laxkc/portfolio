import Header from "@/components/header";

export default function Layout({ children }: { children: preact.JSX.Element }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}
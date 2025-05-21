export function Footer() {
    return (
        <footer className="bg-[#1a1a1c] text-[#a1a1aa] py-6 text-sm text-center">
            <div className="max-w-7xl mx-auto px-6">
                <p>© {new Date().getFullYear()} Capybara API. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
        </footer>
    )
}
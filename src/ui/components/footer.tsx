export function Footer() {
    return (
        <footer className="border-t bg-card py-8">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Capybara API. All rights reserved.
                    </p>
                    {/* <div className="flex gap-4">
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Terms
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Privacy
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Contact
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}
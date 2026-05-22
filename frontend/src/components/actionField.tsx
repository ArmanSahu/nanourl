
export const ActionField = () => {
    return <div className="flex w-fit gap-4 p-4 items-center bg-primary-card rounded-xl border border-blue-950">
        <div className="bg-primary-bg pl-2 pr-32 rounded-md py-3">
            <p className="text-secondary-text/40 text-xs">Paste your long URL here...</p>
        </div>
        <div>
            <div className="bg-primary-button px-7 py-2 rounded-lg text-base">
                Shorten URL
            </div>
        </div>
    </div>
}
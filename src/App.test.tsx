import { render, screen } from "@testing-library/react"

import App from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/App"

test("renders learn react link", () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})

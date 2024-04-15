import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

it("renders without crashing", () => {
    render(<NewToDoForm />);
});

it("matches snapshot", () => {
    const { asFragament } = render(<NewToDoForm />);
    expect (asFragament()).toMatchSnapshot();
});

it("runs the create function on form submit", () => {
    const createMock = jest.fn();
    const { getByText } = render(<NewToDoForm createToDo={createMock} />);
    const createButton = getByText("Add a ToDo");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});
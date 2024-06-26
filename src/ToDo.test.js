import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", () => {
    render(<ToDo />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<ToDo />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when editing", () => {
    const { asFragment, getByText } = render(<ToDo />);
    const editButton = getByText("Edit");
    fireEvent.click(editButton);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the update function on form submit", () => {
    const updateMock = jest.fn();
    const { getByText } = render(<ToDo update={updateMock} />);
    const editButton = getByText("Edit");
    fireEvent.click(editButton);
    const updateButton = getByText("Update!");
    fireEvent.click(updateButton);
    expect(updateMock).toHaveBeenCalled();
});

it("runs the delete function on button click", () => {
    const removeMock = jest.fn();
    const { getByText } = render(<ToDo remove={removeMock} />);
    const deleteButton = getByText("X");
    fireEvent.click(deleteButton);
    expect(removeMock).toHaveBeenCalled();
});
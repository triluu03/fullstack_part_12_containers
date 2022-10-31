import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo', () => {
    const todo = {
        text: 'test todo',
        done: false,
    };
    const onClickDelete = (todo) => {
        console.log('delete', todo);
    };
    const onClickComplete = (todo) => {
        console.log('complete', todo);
    };
    render(
        <Todo
            todo={todo}
            onClickDelete={onClickDelete}
            onClickComplete={onClickComplete}
        />
    );
    const element = screen.getByText('test todo');
    expect(element).toBeDefined();
});

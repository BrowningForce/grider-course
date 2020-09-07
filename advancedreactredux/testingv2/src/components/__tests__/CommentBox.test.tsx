import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import CommentBox from 'components/CommentBox';
import { act } from 'react-dom/test-utils';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders a form with textarea and a button in it', () => {
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    act(() => {
      wrapped.find('textarea').simulate('change', {
        target: {
          value: 'test',
        },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });
    wrapped.update();
  });

  it('has a text area that a user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('test');
  });

  it('submits a form and clears the input', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('test');

    act(() => {
      wrapped.find('form').simulate('submit');
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

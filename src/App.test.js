import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header', () => {
  const header = document.createElement('header');
  ReactDOM.render(<App />, header);
  ReactDOM.unmountComponentAtNode(header);
});

it('renders title', () => {
  const title = document.createElement('h1');
  ReactDOM.render(<App />, title);
  ReactDOM.unmountComponentAtNode(title);
});

it('renders subtitle', () => {
  const subtitle = document.createElement('h2');
  ReactDOM.render(<App />, subtitle);
  ReactDOM.unmountComponentAtNode(subtitle);
});

it('renders paragraph', () => {
  const p = document.createElement('p');
  ReactDOM.render(<App />, p);
  ReactDOM.unmountComponentAtNode(p);
});

it('renders form', () => {
  const form = document.createElement('form');
  ReactDOM.render(<App />, form);
  ReactDOM.unmountComponentAtNode(form);
});

it('renders ul', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<App />, ul);
  ReactDOM.unmountComponentAtNode(ul);
});

it('renders li', () => {
  const li = document.createElement('li');
  ReactDOM.render(<App />, li);
  ReactDOM.unmountComponentAtNode(li);
});

it('renders input', () => {
  const input = document.createElement('input');
  ReactDOM.render(<App />, input);
  ReactDOM.unmountComponentAtNode(input);
});

it('renders footer', () => {
  const footer = document.createElement('footer');
  ReactDOM.render(<App />, footer);
  ReactDOM.unmountComponentAtNode(footer);
});




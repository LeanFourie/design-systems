// Packages & Modules
import { argsToTemplate } from '@storybook/angular';

// Components
import { TextComp } from './text.component';

// Definitions
import type {
  Meta,
  StoryObj
} from '@storybook/angular';

// Story
export const Story: StoryObj<TextComp> = {
  render: (args: TextComp) => ({
    props: { ...args },
    template: `
      <text-comp ${ argsToTemplate(args) }>
        Design System Text
      </text-comp>`,
  }),
  args: {
    casing: 'unset',
    className: undefined,
    decoration: 'none',
    renderAs: undefined,
    style: 'unset',
    variant: 'body md',
    weight: undefined
  }
};

// Meta
const meta: Meta<TextComp> = {
  component: TextComp,
  tags: ['autodocs'],
  argTypes: {
    casing: {
      table: { defaultValue: { summary: 'unset' } },
      defaultValue: 'unset',
      options: [
        'unset',
        'lowercase',
        'uppercase'
      ]
    },
    className: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined
    },
    decoration: {
      table: { defaultValue: { summary: 'none' } },
      defaultValue: 'none',
      options: [
        'none',
        'underline',
        'line through'
      ]
    },
    renderAs: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined,
      options: [
        undefined,
        'span',
        'label',
        'caption'
      ]
    },
    style: {
      table: { defaultValue: { summary: 'unset' } },
      defaultValue: 'unset',
      options: [
        'unset',
        'italic'
      ]
    },
    variant: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: 'body md',
      options: [
        'heading sm',
        'heading md',
        'heading lg',
        'sub-heading sm',
        'sub-heading md',
        'sub-heading lg',
        'body sm',
        'body md',
        'body lg',
        'tagline',
        'quote'
      ]
    },
    weight: {
      table: { defaultValue: { summary: undefined } },
      defaultValue: undefined,
      options: [
        'thin',
        'extra light',
        'light',
        'regular',
        'medium',
        'semi bold',
        'bold',
        'extra bold',
        'black'
      ]
    }
  }
};

export default meta;

export default {
  title: 'my-component',
  argTypes: {
    first: {
      name: 'first',
      type: { name: 'string', required: true },
      defaultValue: 'BipBip',
      description: 'first value',
      control: { type: 'text' }
    },
    middle: {
      name: 'middle',
      type: { name: 'string', required: true },
      defaultValue: '$',
      description: 'middle value',
      control: { type: 'text' }
    },
    last: {
      name: 'last',
      type: { name: 'string', required: true },
      defaultValue: 'last',
      description: 'last value',
      control: { type: 'text' }
    },
    textColor: {
      name: 'text-color',
      type: { name: 'string', required: false },
      defaultValue: 'red',
      description: 'text color',
      control: { type: 'color' }
    }
  },
};

export const Default = (args: { textColor: string, first: string; middle: string; last: string; }) => `
<my-component text-color="${args.textColor}" first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>
`;

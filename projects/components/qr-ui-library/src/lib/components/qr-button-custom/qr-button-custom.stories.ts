import type { Meta, StoryObj } from '@storybook/angular';
import { QrButtonCustom } from './qr-button-custom.component'; 

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<QrButtonCustom> = {
  title: 'Example/QrButtonCustom',
  component: QrButtonCustom,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<QrButtonCustom>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
};

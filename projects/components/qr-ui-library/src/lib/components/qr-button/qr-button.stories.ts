import type { Meta, StoryObj } from '@storybook/angular';
import { QrButton } from './qr-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<QrButton> = {
  title: 'Example/QrButton',
  component: QrButton,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<QrButton>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
};

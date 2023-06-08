import { Section } from '@/demo/router/routeRecords'

export const components: Section = {
  accordion: () => import('./Accordion.vue'),
  baseInput: () => import('./BaseInput.vue'),
  breadCrumbs: () => import('./BreadCrumbs.vue'),
  button: () => import('./Buttons.vue'),
  buttonGroup: () => import('./ButtonGroup.vue'),
  card: () => import('./Card.vue'),
  checkbox: () => import('./Checkbox.vue'),
  checkboxGroup: () => import('./CheckboxGroup.vue'),
  code: () => import('./Code.vue'),
  codeHighlight: () => import('./CodeHighlight.vue'),
  codeInput: () => import('./CodeInput.vue'),
  combobox: () => import('./Combobox.vue'),
  dateInput: () => import('./DateInput.vue'),
  dateRangeInput: () => import('./DateRangeInput.vue'),
  divider: () => import('./Divider.vue'),
  drawer: () => import('./Drawer.vue'),
  emptyState: () => import('./EmptyState.vue'),
  form: () => import('./Form.vue'),
  globalSidebar: () => import('./GlobalSidebar.vue'),
  heading: () => import('./Heading.vue'),
  iconButtonMenu: () => import('./IconButtonMenu.vue'),
  iconText: () => import('./IconText.vue'),
  keyValue: () => import('./KeyValue.vue'),
  label: () => import('./Label.vue'),
  links: () => import('./Links.vue'),
  listItems: () => import('./ListItems.vue'),
  listTruncate: () => import('./ListTruncate.vue'),
  markdownRenderer: () => import('./MarkdownRenderer.vue'),
  message: () => import('./Message.vue'),
  modals: () => import('./Modals.vue'),
  nativeDateInput: () => import('./NativeDateInput.vue'),
  nativeSelect: () => import('./NativeSelect.vue'),
  numberInput: () => import('./NumberInput.vue'),
  overflowMenu: () => import('./OverflowMenu.vue'),
  pager: () => import('./Pager.vue'),
  popOver: () => import('./PopOver.vue'),
  radioGroup: () => import('./RadioGroup.vue'),
  select: () => import('./Select.vue'),
  stepper: () => import('./Stepper.vue'),
  tab: () => import('./Tab.vue'),
  table: () => import('./Table.vue'),
  tags: () => import('./Tags.vue'),
  tagsArea: () => import('./TagsArea.vue'),
  tagsInput: () => import('./TagsInput.vue'),
  terminal: () => import('./Terminal.vue'),
  textarea: () => import('./Textarea.vue'),
  textInput: () => import('./TextInput.vue'),
  textTruncate: () => import('./TextTruncate.vue'),
  timeline: () => import('./Timeline.vue'),
  toast: () => import('./Toast.vue'),
  toggle: () => import('./Toggle.vue'),
  tooltip: () => import('./Tooltip.vue'),
  typeAhead: () => import('./TypeAhead.vue'),
  typography: () => import('./Typography.vue'),
  virtualScroller: () => import('./VirtualScroller.vue'),
  window: () => import('./Window.vue'),
  wizard: () => import('./Wizard.vue'),
}
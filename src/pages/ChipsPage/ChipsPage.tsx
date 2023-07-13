import { FormEvent, useRef, useState } from 'react';

const data = {
  topic: {
    name: 'topic',
    title: 'Which topic are you interested in?',
    required: true,
    preselected: 'topic5',
    fields: [
      { name: 'Qwik', id: 'topic1', disabled: false },
      { name: 'Svelte', id: 'topic2', disabled: false },
      { name: 'Solid', id: 'topic3', disabled: false },
      { name: 'React', id: 'topic4', disabled: false },
      { name: 'Remix', id: 'topic5', disabled: false },
      { name: 'Angular', id: 'topic6', disabled: false },
      { name: 'Vue', id: 'topic7', disabled: false },
      { name: 'Ember', id: 'topic8', disabled: false },
      { name: 'Meteor', id: 'topic9', disabled: false },
      { name: 'Backbone', id: 'topic10', disabled: false },
      { name: 'Knockout', id: 'topic11', disabled: false },
      { name: 'Polymer', id: 'topic12', disabled: false },
      { name: 'Aurelia', id: 'topic13', disabled: false },
    ],
  },
  size: {
    name: 'size',
    title: 'What is your preferred size?',
    required: true,
    preselected: null,
    fields: [
      { name: 'xxs', id: 'size1', disabled: false },
      { name: 'xs', id: 'size2', disabled: false },
      { name: 'sm', id: 'size3', disabled: false },
      { name: 'md', id: 'size4', disabled: false },
      { name: 'lg', id: 'size5', disabled: false },
      { name: 'xl', id: 'size6', disabled: false },
      { name: 'xxl', id: 'size7', disabled: false },
      { name: '2xl', id: 'size8', disabled: false },
      { name: '3xl', id: 'size9', disabled: false },
      { name: '4xl', id: 'size10', disabled: false },
    ],
  },
};

const ChipsPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [submittedData, setSubmittedData] = useState<any>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;
    const elements = formEl.elements;

    const checkboxNodeList = (elements as any)['topic'];
    const checkedBoxes = Array.from(checkboxNodeList).filter((checkbox: any) => checkbox.checked);
    const topics = checkedBoxes.map((checkbox: any) => checkbox.value);

    setSubmittedData({
      topics,
      size: (elements as any).size.value,
    });
  };

  return (
    <div>
      <h1>Start testing Chips by exploring the actions below</h1>
      <p>
        Action chips are interactive UI elements triggering actions tied to main content. Compact
        and context-specific, they enhance user experience by providing additional functionality.
        For instance, in a music app, a chip may allow users to add songs to a playlist, or share
        them, thus seamlessly integrating extra features.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <tds-chip
          size="lg"
          onClick={() => {
            alert('clicked');
          }}
        >
          <tds-icon slot="prefix" name="lock_inactive" size="16px"></tds-icon>
          <span slot="label">Lock</span>
        </tds-chip>
        <tds-chip
          size="lg"
          onClick={() => {
            alert('clicked');
          }}
        >
          <tds-icon slot="prefix" name="notification" size="16px"></tds-icon>
          <span slot="label">Set alarm</span>
        </tds-chip>
      </div>
      <form onSubmit={onSubmit} ref={formRef}>
        <p className="tds-u-mb3">
          Checkbox chips are versatile UI components allowing multiple selections within a dataset.
          Unlike traditional checkboxes, these chips provide a modern, compact, and intuitive way to
          select options. They are particularly effective in scenarios where users may want to apply
          multiple filters or categories simultaneously, improving user experience through their
          simplicity and ease of use.
        </p>

        <fieldset className="tds-u-mb3">
          <legend className="tds-headline-02 tds-u-mb3">Pick your favourite topics</legend>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {data.topic.fields.map((topic) => {
              const uid = `topic-${topic.id}`;
              return (
                <tds-chip
                  key={uid}
                  type="checkbox"
                  name="topic"
                  value={topic.name}
                  checked={data.topic.preselected === topic.id}
                >
                  <span slot="label">{topic.name}</span>
                </tds-chip>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="tds-u-mb3">
          <legend className="tds-headline-02 tds-u-mb3">Wheel size</legend>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {data.size.fields.map((size) => {
              const uid = `size-${size.id}`;
              return (
                <tds-chip
                  key={uid}
                  type="radio"
                  name="size"
                  value={size.name}
                  // required={data.sizes.required}
                  // disabled={size.disabled}
                  checked={data.size.preselected === size.id}
                  ref={(ref) => {
                    if (ref) {
                      // Note: workaround for React, in a real world app
                      // listeners should be removed as well to prevent memory leaks
                      ref.addEventListener('tdsChange', (e: any) => {
                        console.log('tdsChange event.detail', e.detail);
                      });

                      (ref as any).handleChange = () => {
                        console.log('should not work');
                      };
                    }
                  }}
                >
                  <span slot="label">{size.name}</span>
                </tds-chip>
              );
            })}
          </div>
        </fieldset>
        <tds-button
          text="Submit"
          onClick={() => {
            formRef?.current?.requestSubmit();
          }}
        ></tds-button>
      </form>
      <pre>{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
};

export default ChipsPage;

const data = {
  topics: {
    name: 'topics',
    title: 'Which topic are you interested in?',
    required: true,
    preselected: 'topic1',
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
  sizes: {
    name: 'sizes',
    title: 'What is your preferred size?',
    required: true,
    preselected: 'size1',
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
          <span slot="label">
            <tds-icon name="lock_inactive" size="16px"></tds-icon>
            Lock
          </span>
        </tds-chip>
        <tds-chip
          size="lg"
          onClick={() => {
            alert('clicked');
          }}
        >
          <span slot="label">
            <tds-icon name="notification" size="16px"></tds-icon>
            Set alarm
          </span>
        </tds-chip>
      </div>
      <form>
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
            {data.topics.fields.map((topic) => {
              const uid = `topic-${topic.id}`;
              return (
                <tds-chip key={uid} type="checkbox" name="topic" value={topic.name}>
                  <span slot="label">{topic.name}</span>
                </tds-chip>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="tds-headline-02 tds-u-mb3">Wheel size</legend>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {data.sizes.fields.map((size) => {
              const uid = `size-${size.id}`;
              return (
                <tds-chip
                  key={uid}
                  type="radio"
                  name="size"
                  value={size.name}
                  // required={data.sizes.required}
                  // disabled={size.disabled}
                  checked={data.sizes.preselected === size.id}
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
      </form>
    </div>
  );
};

export default ChipsPage;

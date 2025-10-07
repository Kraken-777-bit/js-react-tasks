import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.editorInstance = null;
  }

  componentDidMount() {
    if (typeof document.elementFromPoint !== 'function') {
      document.elementFromPoint = () => null;
    }

    // Инициализируем редактор
    this.editorInstance = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true,
    });

    // Подписка на изменения
    this.editorInstance.addHook('change', () => {
      const content = this.editorInstance.getMarkdown();
      if (this.props.onContentChange) {
        this.props.onContentChange(content);
      }
    });
  }

  componentWillUnmount() {
    if (this.editorInstance) {
      this.editorInstance.destroy();
      this.editorInstance = null;
    }
  }

  render() {
    return <div ref={this.editorRef} />;
  }
}
// END

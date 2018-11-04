import * as React from 'react';
import TopNav from './shared/components/admin/top-nav';
interface Props {
}
interface State {
  text: string;
}
class MasterPage extends React.PureComponent<Props, State> {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return(
      <>
        <TopNav/>
        <main className="content">
          hello
        </main>
      </>
    );
  }
}

export default MasterPage;

import * as React from 'react';

export interface Props {
  foo: string;
}

export class TestComponent extends React.PureComponent<Props> {

  public componentDidMount () {
    //
  }

  public render () {
    return (
      <div />
    )
  }
}

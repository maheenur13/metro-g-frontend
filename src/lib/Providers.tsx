'use client';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import AntdComponentsRegistry from './AntdRegistry';
import StyledComponentsRegistry from './StyledComponentRegistry';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <AntdComponentsRegistry>{children}</AntdComponentsRegistry>
      </StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;

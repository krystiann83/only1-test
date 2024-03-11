import PageWrapper from "./components/page-wrapper";
import Autocomplete from "./components/autocomplete";
import QueryProvider from './api/config/query-provider';

export default function Home() {
  return <PageWrapper>
    <QueryProvider>
      <Autocomplete />
    </QueryProvider>
  </PageWrapper>;
}

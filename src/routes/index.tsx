import { component$, useContext, $, createContextId, useContextProvider, useSignal} from '@builder.io/qwik';


export default component$((props: any) => {
  return (
    <div class={"flex flex-col"}>
      <h1 class={"bg-secondary-500"}>Hello world</h1>
    </div>
  );
});

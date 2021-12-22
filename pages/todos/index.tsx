import axios from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';
import React from 'react';
import TodosCompIndex from '../../components/todos/ui'
import { ITodoModel } from '../../imodels/ITodoModel';

 export const getStaticProps: GetStaticProps = async () => {
  console.log(
    'getStaticProps 함수는 서버에서 실행됩니다. 이 명령문이 브라우저 콘솔이 아닌 vs code 터미널에서만 인쇄되는지 확인하여 확인하십시오.'   
  );
  const apiUrl = 'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
  const todosListFromApi = await axios.get(apiUrl)
  const todosList: ITodoModel[] = todosListFromApi.data;

  if(!todosList) {
    return {
      notFound: true,
    };
  }
  return {
    props: { todosList : todosList },
  }
 }

const TodoIndex = ( { todosList }: {todosList: ITodoModel[] } ) => {
  return (
    <div>
      <TodosCompIndex />
      {todosList.map((todo:ITodoModel)=>(
        <h1 key={todo.id}>{todo.text}</h1>
      ))}
    </div>
  )
}

export default TodoIndex

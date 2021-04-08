import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../modules';
import {getUSerProfileThunk} from '../../modules/github';
import GithubUsernameForm from '../../components/Github/GithubUsernameForm';
import GithubProfileInfo from '../../components/Github/GithubProfileInfo';

function GithubContainer() {
  const {loading, data, error} = useSelector(
    (state: RootState) => state.github.userProfile,
  );
  const dispatch = useDispatch();

  const onSubmitUserName = (username: string) => {
    dispatch(getUSerProfileThunk(username));
  };

  return (
    <SafeAreaView>
      <GithubUsernameForm onSubmitUsername={onSubmitUserName} />
      {loading && <Text>로딩중...</Text>}
      {error && <Text>에러발생!...</Text>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </SafeAreaView>
  );
}

export default GithubContainer;

package com.ricardoborillo.test.dao;

import java.util.List;

import com.ricardoborillo.test.model.User;

public interface UsersDAO
{
    List<User> getUsers();

    void removeUser(Integer id);

    User addUser(User user);

    void updateUser(User user);
}
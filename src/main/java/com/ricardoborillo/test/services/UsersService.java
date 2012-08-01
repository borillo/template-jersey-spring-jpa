package com.ricardoborillo.test.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ricardoborillo.test.dao.UsersDAO;
import com.ricardoborillo.test.model.User;

@Service
public class UsersService
{
    @Autowired
    private UsersDAO usuariosDAO;
    
    public List<User> getUsuarios()
    {
        return usuariosDAO.getUsers();
    }

    public void removeUser(Integer id)
    {
        usuariosDAO.removeUser(id);
    }

    public User addUser(User user)
    {
        return usuariosDAO.addUser(user);
    }

    public void updateUser(User user)
    {
        usuariosDAO.updateUser(user);
    }
}

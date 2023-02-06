using API.Data;
using API.DTOs;
using API.Models;
using AutoMapper;
using System.Collections.Generic;

namespace API.Services
{
    public class JsonFileService
    {
        // Use JsonFileRepository and assign it in a private field
        private JsonFileRepository _repository;
        private IMapper _mapper;
        public JsonFileService(JsonFileRepository jsonFileRepository, IMapper mapper)
        {
            // Read the file and assign the result to the private field
            _repository = jsonFileRepository;
            _mapper = mapper;
        }

        // Use JsonFileRepository to get all contacts
        public List<ReadContactDTO> GetContacts()
        {
            var contacts = _repository.GetAllContacts();
            return _mapper.Map<List<ReadContactDTO>>(contacts);
        }

        // Use JsonFileRepository to get a single contact by Id
        public ReadContactDTO GetContactById(Guid id)
        {
            var contact = _repository.GetContactById(id);
            return _mapper.Map<ReadContactDTO>(contact);
        }

        // Use JsonFileRepository to add a new contact
        public ReadContactDTO AddContact(CreateContactDTO createContact)
        {
            var contact = _mapper.Map<Contact>(createContact);
            _repository.AddContact(contact);
            _repository.SaveChanges();
            return _mapper.Map<ReadContactDTO>(contact);
        }


        // Use JsonFileRepository to update a contact
        public ReadContactDTO UpdateContact(UpdateContactDTO updateContact)
        {
            var contact = _mapper.Map<Contact>(updateContact);
            _repository.UpdateContact(contact);
            _repository.SaveChanges();
            
            return _mapper.Map<ReadContactDTO>(contact);
        }

        // Use JsonFileRepository to delete a contact
        public void DeleteContact(Guid id)
        {
            _repository.DeleteContact(id);
            _repository.SaveChanges();
        }

    }
}

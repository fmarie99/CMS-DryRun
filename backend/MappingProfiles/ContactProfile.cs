using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.MappingProfiles
{
    public class ContactProfile : Profile
    {
        public ContactProfile()
        {
            CreateMap<Contact, ReadContactDTO>();
            // When CreateContactDto is converted give it a new Guid for Id
            CreateMap<CreateContactDTO, Contact>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()));
            CreateMap<UpdateContactDTO, Contact>();
        }
    }
}

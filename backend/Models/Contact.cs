namespace API.Models
{
    public class Contact
    {
        //Create a Contact model that has the properties id of type GUID, Firstname, lastname, physical address and delivery address
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhysicalAddress { get; set; }
        public string DeliveryAddress { get; set; }
        
    }
}


const tableFrame = (props) =>{
    return <div>
        <table className="table-secondary">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Impact</th>
                    <th scope="col">LvLUp Requirement</th>
                    <th scope="col">Level Up</th>
                </tr>

            </thead>
            <tableSection sectionName="Physical Body"></tableSection>
            <tableSection sectionName="Super Powers"></tableSection>
        </table>
    </div>
}

export default tableFrame;